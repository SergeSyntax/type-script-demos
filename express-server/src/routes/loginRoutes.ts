import { NextFunction, Request, Response, Router } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    return next();
  } else {
    res.status(403).send('Not permitted');
  }
}

const router = Router();

router.get('/login', (req: RequestWithBody, res: Response) => {
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
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'hi@hi.com' && password === 'password') {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else res.send('Invalid email or password');
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn)
    res.send(`
  <div>
    <div>You are logged in</div>
    <a href="/logout">logout</a>
  </div>
  `);
  else
    res.send(`
  <div>
    <div>You are not logged in</div>
    <a href="/login">Login</a>
  </div>
  `);
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/potected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to proteceted route, logged in user!');
});

export { router };
