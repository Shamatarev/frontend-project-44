install: # установить зависимости
	npm ci
	
brain-games:	 # запустить приложение
	node bin/brain-games.js
	
publish:
	sudo npm publish --dry-run
