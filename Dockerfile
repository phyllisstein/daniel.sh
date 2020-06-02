FROM ubuntu:focal AS runtime

RUN apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get install --assume-yes --no-install-recommends --option=Dpkg::Options::=--force-confnew --option=Dpkg::Options::=--force-confdef --option=Dpkg::Options::=--force-unsafe-io \
    apt-transport-https \
    apt-utils \
    ca-certificates \
    git

FROM runtime AS watchman

RUN DEBIAN_FRONTEND=noninteractive apt-get install --assume-yes --no-install-recommends --option=Dpkg::Options::=--force-confnew --option=Dpkg::Options::=--force-confdef --option=Dpkg::Options::=--force-unsafe-io \
  autoconf \
  automake \
  build-essential \
  libpcre3 \
  libpcre3-dev \
  libssl-dev \
  libtool \
  pkg-config

RUN git clone --branch=v4.9.0 https://github.com/facebook/watchman /watchman \
  && cd /watchman \
  && ./autogen.sh \
  && ./configure \
    --enable-lenient \
    --enable-shared=no \
    --enable-stack-protector \
    --enable-statedir=/var/run \
    --enable-static=yes \
    --with-pcre \
    --with-python=no \
  && make

FROM runtime AS app

WORKDIR /app

RUN DEBIAN_FRONTEND=noninteractive apt-get install --assume-yes --no-install-recommends --option=Dpkg::Options::=--force-confnew --option=Dpkg::Options::=--force-confdef --option=Dpkg::Options::=--force-unsafe-io \
  curl \
  gnupg2 \
  libpng-dev

RUN echo "deb https://deb.nodesource.com/node_14.x focal main" >> /etc/apt/sources.list.d/nodesource.list \
  && echo "deb-src https://deb.nodesource.com/node_14.x focal main" >> /etc/apt/sources.list.d/nodesource.list \
  && curl -s https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ rc main" > /etc/apt/sources.list.d/yarn.list \
  && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get install --assume-yes --no-install-recommends --option=Dpkg::Options::=--force-confnew --option=Dpkg::Options::=--force-confdef --option=Dpkg::Options::=--force-unsafe-io \
    nodejs \
    yarn

COPY --from=watchman /watchman/watchman /bin/

ENV ENABLE_GATSBY_REFRESH_ENDPOINT=true

EXPOSE 8000

CMD ["./config/dev-entrypoint.sh"]
