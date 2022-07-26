# "React Register Form with Validation, Axios, and Accessibility"

✅ [Check out my YouTube Channel with all of my tutorials](https://www.youtube.com/DaveGrayTeachesCode).

**Description:**

This repository shares the code applied during the [YouTube Tutorial](https://youtu.be/brcHK3P6ChQ).

### Academic Honesty

**DO NOT COPY FOR AN ASSIGNMENT** - Avoid plagiargism and adhere to the spirit of this [Academic Honesty Policy](https://www.freecodecamp.org/news/academic-honesty-policy/).

## My Notes

Register form repo: https://github.com/gitdagray/react_register_form
Login form: repo: https://github.com/gitdagray/react_login_form
Protected Routes repo: https://github.com/gitdagray/react_protected_routes
JWT implementation repo: https://github.com/gitdagray/react_jwt_auth

Thank you: https://github.com/gitdagray

Source: https://github.com/gitdagray/react_register_form

Backed end /register route is expecting user and pwd properties.
So if named them something else in frontend, need to specify.

```
const handleSubmit = async (e)=>{
    ...
await axios.post('register',
JSON.stringify(user :username, pwd: myVarName),
...
)}
```

Upond successful registration backend will respond with an access token.

```
console.log(response.data)
console.log(response.accessToken)
console.log(JSON.stringify(response))

```

## Users

{"user": "alex1", "pwd": "1234"} Role:User: 2001, Editor:1984, Admin:5150
{"user": "alex2", "pwd": "12345"} Role: User:2001
{"user": "alex3", "pwd": "123456"} Role: User:2001

alex4
Alex1234!

alex5
Alex12345!

## JWT FrontEnd

Upon authentication access and refresh token issue.
Access token has short duration before expiration and refresh token has long duration.
Frontend should store access token only in memory (current application state).
Refresh need to have expiration. Refresh token should not be allowed to issued new refresh tokens.
API will issue refresh tokens in an httpOnly cookie.
API will verify access token with middleware everytime it is used to make a request.
API will also verify refresh token and cross reference to refresh token in database.
Storing refresh tokens in database will allow us to terminate refresh tokens if the user decides to logout.

## TODO

Chapter 21 of beginners react course ... createContext
