FROM node:14-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

# Commands
# docker build -t myportfolio .
# docker build -t:v1 myportfolio . (: gives a tag v1 to the image)
# docker run --name myportfolio_container myportfolio
# docker run --name myportfolio_container -p 5000(localhost):3000(container) myportfolio
# docker stop myportfolio_container
# detach flag (-d) starts the container detached from the terminal

# docker start myportfolio_container (starts a container thats already created, docker run creates a new container)
# docker stop myportfolio_container

# Managing images and containers: 
# docker images (shows all images)
# docker ps (shows all running containers, adding -a flag lists all containers)
# docker image rm myapp (deletes image myapp)
# docker container rm myportfolio_container (deletes the container)
# docker system prune -a (removes all containers, images and volumes) 

# all settings get saved when a command is run and docker start container will use those settings
# Docker caches each layer while building an image. If a layer is changed, it gets built again else nope