import { Client, Storage, ID, Models } from "appwrite";

// Initialize Appwrite client
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string);

const storage = new Storage(client);

// Function to create an image file in the Appwrite storage
export const createImage = async (image: File): Promise<{ status: string; id?: string; err?: string }> => {
  try {
    const response = await storage.createFile(
      process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
      ID.unique(),
      image
    );
    if (response.$id) {
      return { status: "success", id: response.$id };
    } else {
      return { status: "failed" };
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log("appwrite :: createImage :: error :: ", err.message);
      return { status: "error", err: err.message };
    }
    return { status: "error", err: "Unknown error" };
  }
};

// Function to delete an image file by its ID
export const deleteImage = async (id: string): Promise<void> => {
  try {
    const res = await storage.deleteFile(
      process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
      id
    );
    console.log(`${id} deleted :: res :: `, res);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log("appwrite :: deleteImage :: error :: ", err.message);
    }
  }
};

// Function to delete all images in the bucket
export const deleteAllTheImagesInTheBucket = async (): Promise<void> => {
  try {
    const data: Models.FileList = await storage.listFiles(
      process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string
    );
    const imagesId = data.files.map((file: Models.File) => file.$id);
    console.log(imagesId);
    for (const id of imagesId) {
      const res = await storage.deleteFile(
        process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
        id
      );
      console.log(`${id} deleted :: res :: `, res);
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(
        "appwrite :: deleteAllTheImagesInTheBucket :: error :: ",
        err.message
      );
    }
  }
};
