fix:
	sed -i 's|\(wp-emoji-release.min.js\)?ver=[0-9.]\+|\1|g' `grep -rl 'wp-emoji-release.min.js'`
	sed -i 's|dev\.aenix\.io|aenix.io|g' `grep -lr aenix.io`
