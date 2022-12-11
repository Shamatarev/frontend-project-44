install: # установить зависимости
	npm ci
	
publish:
	sudo npm publish --dry-run
brain-games:	 # запустить приложение
	node bin/brain-games.js

brain-even:	 # запустить приложение
	node bin/brain-even.js

lint:
	npx eslint .
	
