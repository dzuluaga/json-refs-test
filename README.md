json-refs-test
============

1. Run json-refs CLI generates the right output:

```
$ json-refs resolve ./swagger/yaml/swagger.yaml
{
  "title": "1234",
  "testref": "Test"
}
```

2. However, when I run this command from API, the reference is not resolved:
```
$ node app.js
{"title":"1234","testref":{"$ref":"./definitions.yaml#/definitions/Pet"}}
```
### Am I missing anything?
