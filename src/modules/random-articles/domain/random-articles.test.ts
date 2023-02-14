export interface test {}

// import { randomArticleFakes } from "../infrastructure/random-articles.fakes";
// import { RandomArticlesInMemory } from "../infrastructure/random-articles.in-memory";
// import { RandomArticle } from "./random-articles";
// import { getRandomArticle } from "./random-articles.action";
// import { mapToDomainModel } from "./random-articles.mapper";

// describe("[random articles] unit tests", () => {
//   const randomArticlesOutput = new RandomArticlesInMemory();

//   describe("when i want to get a random article", () => {
//     it("i should get it without error", async () => {
//       randomArticlesOutput.setRandomArticle(randomArticleFakes);

//       const randomArticle: RandomArticle = await getRandomArticle({
//         randomArticlesOutput,
//       });

//       const expectedRandomArticle: RandomArticle =
//         mapToDomainModel(randomArticle);

//       expect(randomArticle).toEqual(expectedRandomArticle);
//     });

//     it("i shouldn't get it and throw error", async () => {
//       randomArticlesOutput.setRandomArticle(undefined);

//       await expect(
//         getRandomArticle({ randomArticlesOutput })
//       ).rejects.toThrowError();
//     });
//   });
// });
