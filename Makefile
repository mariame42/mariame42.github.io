NPM ?= npm

.PHONY: install build run deploy clean

install:
	$(NPM) install

build:
	$(NPM) run build

run:
	$(NPM) run dev

deploy:
	$(NPM) run deploy

clean:
	rm -rf node_modules dist
