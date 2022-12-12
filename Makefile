install: # установить зависимости
	npm ci
	sudo npm link
publish:
	sudo npm publish --dry-run
brain-games:	 # запустить приложение
	node bin/brain-games.js
brain-calc:	 # запустить приложение
	node bin/games/brain-calc.js	
brain-even:	 # запустить приложение
	node bin/games/brain-even.js
brain-gcd:	 # запустить приложение
	node bin/games/brain-gcd.js
brain-prime:	 # запустить приложение
	node bin/games/brain-primejs
brain-progression:	 # запустить приложение
	node bin/games/brain-progression.js
lint:
	npx eslint .
	

