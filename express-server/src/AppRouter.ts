import express from 'express';

export class AppRouter {
  private static _instance: express.Router;

  static get instane(): express.Router {
    if (!AppRouter._instance) {
      AppRouter._instance = express.Router();
    }

    return AppRouter._instance;
  }
}
