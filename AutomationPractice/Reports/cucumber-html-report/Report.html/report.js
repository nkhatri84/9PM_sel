$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Update personal information(First Name) in my account.feature");
formatter.feature({
  "line": 1,
  "name": "Update personal Information",
  "description": "",
  "id": "update-personal-information",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Update personal information(First Name) in my account",
  "description": "",
  "id": "update-personal-information;update-personal-information(first-name)-in-my-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter username \"automationpractice25@gmail.com\" and password \"test@1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on My Personal Information button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enter \"newtestuserrrr\" in firstname input box",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters \"test@1234\" in Current password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters \"test@1234\" in New Password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters \"test@1234\" in Confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on Save",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate message \"Your personal information has been successfully updated.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefition.Open_browser()"
});
formatter.result({
  "duration": 1945047281,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: E:\\AutomationPractice\\.\\Drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.automationpractice.Base.BaseClass.getDriver(BaseClass.java:24)\r\n\tat com.automationpractice.stepdefinition.StepDefition.Open_browser(StepDefition.java:36)\r\n\tat ✽.Given Open browser(Update personal information(First Name) in my account.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefition.User_click_on_Sign_In_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "automationpractice25@gmail.com",
      "offset": 21
    },
    {
      "val": "test@1234",
      "offset": 67
    }
  ],
  "location": "StepDefition.User_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefition.Click_on_SignIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefition.User_clicks_on_My_Personal_Information_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "newtestuserrrr",
      "offset": 12
    }
  ],
  "location": "StepDefition.User_enter_in_firstname_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test@1234",
      "offset": 13
    }
  ],
  "location": "StepDefition.User_enters_in_Current_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test@1234",
      "offset": 13
    }
  ],
  "location": "StepDefition.User_enters_in_New_Password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test@1234",
      "offset": 13
    }
  ],
  "location": "StepDefition.User_enters_in_Confirmation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefition.Click_on_Save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your personal information has been successfully updated.",
      "offset": 18
    }
  ],
  "location": "StepDefition.Validate_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2389063,
  "error_message": "java.lang.NullPointerException\r\n\tat com.automationpractice.stepdefinition.StepDefition.afterScenario(StepDefition.java:164)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:195)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
});