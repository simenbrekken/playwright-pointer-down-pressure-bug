// @ts-check
import { test, expect } from "@playwright/test";

test("mouse click should set pressure option of PointerEvent to 0.5", async ({
  page,
}) => {
  await page.goto("file://" + process.cwd() + "/public/index.html");
  await page.getByRole("button").click();
  await expect(page.getByRole("textbox")).toHaveValue("0.5", { timeout: 100 });
});
