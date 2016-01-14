# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Movie.destroy_all
Character.destroy_all
Movie.create([
  {title: 'Spiderman', year: '2010', poster_url: 'http://www.theamazingspidermangame.com/etc/designs/atvi/amazing-spiderman-game/amazing-spiderman-game-2/images/features/img5.jpg'},
  {title: 'Batman', year: '2012', poster_url: 'http://static2.gamespot.com/uploads/scale_large/104/1049837/2891179-batman-arkham_knight-review_nologo_20150618.jpg'},
  {title: 'Spiderman vs. Batman', year: '2016', poster_url: 'https://i.ytimg.com/vi/e8K1m6SCRz4/hqdefault.jpg'}
])

Character.create([
  {name: 'Tobey Maguire', photo_url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Tobey_Maguire_2014.jpg'},
  {name: 'Michael Keaton', photo_url: 'http://ia.media-imdb.com/images/M/MV5BMTk4NTE2MzczOF5BMl5BanBnXkFtZTYwNTM4MjYz._V1_UY317_CR21,0,214,317_AL_.jpg'}
])
