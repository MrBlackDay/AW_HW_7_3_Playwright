const { test, expect } = require("@playwright/test");
const { chromium } = require("playwright");
const {
  invalidName,
  invalidPassword,
  validName,
  validPassword,
} = require("../user");

test("validUser", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(validName);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(validPassword);
  await page.getByTestId("login-submit-btn").click();
  await expect(
    page.getByRole("heading", { name: "Моё обучение" })
  ).toBeVisible();

});

test("invalidUser", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(invalidName);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(invalidPassword);
  await page.getByTestId("login-submit-btn").click();
  await expect(page.getByTestId('login-error-hint')).toBeVisible();
  
});
