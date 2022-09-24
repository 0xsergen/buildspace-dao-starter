import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0x1157A5f876C8721C3670E121F1cedF97D1851c7f"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "BeerNFT",
        description: "This NFT will give you access to BeerDAO!",
        image: readFileSync("scripts/assets/doubleBeer.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
