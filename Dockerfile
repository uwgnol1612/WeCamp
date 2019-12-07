FROM node:12.2.0-alpine as build

WORKDIR /usr/src/wecamp

ARG NODE_ENV=production

ENV PATH /usr/src/node_app/node_modules/ .bin:$PATH

COPY package.json /usr/src/wecamp/package.json

RUN npm install --silent

COPY . /usr/src/wecamp

RUN npm run postinstall

FROM ruby:2.5.5-alpine3.9

RUN apk add --no-cache --update build-base \
    linux-headers \
    git \
    postgresql-dev \
    nodejs \
    tzdata

ARG DATABASE_URL="postgres://postgres@db"
ARG RAILS_ENV=production

WORKDIR /wecamp
COPY Gemfile /wecamp/Gemfile
COPY Gemfile.lock /wecamp/Gemfile.lock

RUN gem install bundler && bundle install
COPY . /wecamp

COPY --from=build /usr/src/wecamp/app/assets/javascripts/bundle.js ./app/assets/javascripts/
COPY --from=build /usr/src/wecamp/app/assets/javascripts/bundle.js.map ./app/assets/javascripts/

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]