import { Injector, Logger } from "replugged";
export const PluginLogger = Logger.plugin("AtSomeone", "#ffffff80");
export const PluginInjector = new Injector();
import Injections from "./injections/index";

export const start = (): void => {
  PluginLogger.verbose("It's not a joke if it's a feature.");
  void Injections.applyInjections();
};

export const stop = (): void => {
  PluginLogger.verbose("Shame on you, onii-chan.");
  Injections.removeInjections();
};
