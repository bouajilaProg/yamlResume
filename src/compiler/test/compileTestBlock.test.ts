import { compile } from "../../index";
import mockResume from "./mockResume";

async function testBlocks() {
  // Test buffer output (default)
  const { buffer } = await compile(mockResume);
  console.log(`Compiled PDF bytes: ${buffer?.length}`);

  // Test writing to file
  await compile(mockResume, { outputPath: "./output/resume.pdf" });
  console.log("PDF written to output/resume.pdf");
}

testBlocks();
