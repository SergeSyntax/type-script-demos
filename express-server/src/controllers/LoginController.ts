import { NextFunction, Request, Response } from 'express';
import { controller, get, use, bodyValidator, post } from './decorators';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response) {
    res.send(`
    <form action="/login" method="post">
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === 'hi@hi.com' && password === 'password') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else res.send('Invalid email or password');
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}

export { LoginController };
