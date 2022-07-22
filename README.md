# "React Register Form with Validation, Axios, and Accessibility"

✅ [Check out my YouTube Channel with all of my tutorials](https://www.youtube.com/DaveGrayTeachesCode).

**Description:**

This repository shares the code applied during the [YouTube Tutorial](https://youtu.be/brcHK3P6ChQ).

### Academic Honesty

**DO NOT COPY FOR AN ASSIGNMENT** - Avoid plagiargism and adhere to the spirit of this [Academic Honesty Policy](https://www.freecodecamp.org/news/academic-honesty-policy/).

## My Notes

Register form repo: https://github.com/gitdagray/react_register_form
Login form: repo: https://github.com/gitdagray/react_login_form

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

## TODO

Chapter 21 of beginners react course ... createContext
