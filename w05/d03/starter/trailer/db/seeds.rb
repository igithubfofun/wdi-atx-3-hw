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
  {title: 'Spiderman', year: '2010', poster_url: 'http://www.youtube.com/embed/FN3YaybNJ2s?autoplay=1&origin=http://example.com'},
  {title: 'Batman', year: '2012', poster_url: 'https://www.youtube.com/embed/gn-twZm_wEY?autoplay=1&origin=http://example.com'},
  {title: 'Spiderman vs. Batman', year: '2016', poster_url: 'http://www.youtube.com/embed/yViIi3gie2c?autoplay=1&origin=http://example.com'}
])

Character.create([
  {name: 'Tobey Maguire', photo_url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Tobey_Maguire_2014.jpg'},
  {name: 'Michael Keaton', photo_url: 'http://ia.media-imdb.com/images/M/MV5BMTk4NTE2MzczOF5BMl5BanBnXkFtZTYwNTM4MjYz._V1_UY317_CR21,0,214,317_AL_.jpg'}
])


# http://www.theamazingspidermangame.com/etc/designs/atvi/amazing-spiderman-game/amazing-spiderman-game-2/images/features/img5.jpg
