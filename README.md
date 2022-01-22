# JD Site Demo

## hosts 

C:\Windows\System32\drivers\etc\hosts 
```
127.0.0.1 www.airchinacc.com
```

## build

```
docker build -t trip-site-demo:v1 .
```


## run 

```
 docker  run -d --name trip-site-demo1 -p 8000:8000 trip-site-demo:v1
```