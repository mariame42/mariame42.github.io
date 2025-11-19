NPM ?= npm

.PHONY: build run clean

build:
	$(NPM) install

run:
	$(NPM) run dev

clean:
	rm -rf node_modules

