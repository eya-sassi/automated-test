const { Builder, By, until } = require("selenium-webdriver");
require("chromedriver");
async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  

  try {
    await driver.get("http://localhost:3000/contact");
    const firstNameInput = await driver.findElement(By.name("FirstName"));
    await firstNameInput.sendKeys("John");

    const lastNameInput = await driver.findElement(By.name("LastName"));
    await lastNameInput.sendKeys("Doe");

    const emailInput = await driver.findElement(By.name("Email"));
    await emailInput.sendKeys("johndoe@example.com");

    const phoneInput = await driver.findElement(By.name("Phone"));
    await phoneInput.sendKeys("1234567890");

    const messageInput = await driver.findElement(By.name("Message"));
    await messageInput.sendKeys("This is a test message.");

    // Submit the form
    const submitButton = await driver.findElement(
      By.xpath('//button[contains(text(), "Submit")]')
    );
    await submitButton.click();
    // Wait for the success message to appear
    await driver.wait(until.elementLocated(By.className("text-success")), 5000);

    // Verify the success message
    const successMessage = await driver.findElement(By.className("text-success"));
    const messageText = await successMessage.getText();
    const expectedMessage = "Form submitted successfully!";
    if (messageText === expectedMessage) {
      console.log(" test passed!");
    } else {
      console.log("test failed!");
    }
  } finally {
    // Close the browser
    // await driver.quit();
  }
}
example();
