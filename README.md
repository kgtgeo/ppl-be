# PPL BE

## Requirement
1. npm
2. docker (optional)

## Dev Guide
Do these commands in the project root directory
```
npm install
npm run start
```

## Local Running Guide
This is an option to run the project locally without having to use npm
<br>
Do these commands in the project root directory
```
docker build . -t ppl-be
docker run -p 4040:4040 -d ppl-be
```
**Note** you ought to build a new image and run the a new container every time the project has changes