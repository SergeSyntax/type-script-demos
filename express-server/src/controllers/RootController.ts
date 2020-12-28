import { NextFunction, Request, Response } from 'express';
import { controller, get, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    return next();
  } else {
    res.status(403).send('Not permitted');
  }
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn)
      res.send(`
    <div>
      <div>You are logged in</div>
      <a href="/auth/logout">logout</a>
    </div>
    `);
    else
      res.send(`
    <div>
      <div>You are not logged in</div>
      <a href="/auth/login">Login</a>
    </div>
    `);
  }

  @get('/potected')
  @use(requireAuth)
  getProtated(req: Request, res: Response) {
    res.send('Welcome to proteceted route, logged in user!');
  }
}
