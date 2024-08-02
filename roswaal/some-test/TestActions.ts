import { TestAppLaunchConfig } from "../Launch"

export const beforeLaunch = async (): Promise<TestAppLaunchConfig> => {
  // Perform any setup work in here, (setting location, reseting device
  // permissions, etc.)
  return {}
}

export const makeSureThatItGetsAddedCorrectly = async () => {
  // This is a test
  throw new Error("TODO")
}

export const mergeTheTestIntoTheTool = async () => {
  // Merging test
  throw new Error("TODO")
}

export const updateTheProgressOnTheTest = async () => {
  // Progress Update
  throw new Error("TODO")
}
