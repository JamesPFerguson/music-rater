# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

bob = User.create(username:"Bob")
tom = User.create(username:"Tom")

plini = Artist.create(name: "Plini")
ff = Artist.create(name: "Fleet Foxes")

hmc = Album.create(title: "Handmade Cities", art_url:"https://f4.bcbits.com/img/a2040672325_10.jpg",
  artist_id: plini.id, artist_name: plini.name)
ot = Album.create(title: "Other Things", art_url:"https://f4.bcbits.com/img/a0873143341_10.jpg",
    artist_id: plini.id, artist_name: plini.name)
hb = Album.create(title: "Helplessness Blues",
  art_url:"https://images-na.ssl-images-amazon.com/images/I/81z4V17odOL._SL1220_.jpg",
  artist_id: ff.id, artist_name: ff.name)

review1 = Review.create(album_id: hmc.id, user_id: bob.id, rating: 4,
  content: "This album was great.")
    hmc.reviews << review1
review2 = Review.create(album_id: ot.id, user_id: bob.id, rating: 2,
    content: "This album was not good.")
    ot.reviews << review2
review3 = Review.create(album_id: hmc.id, user_id: tom.id, rating: 3,
    content: "This album was okay.")
    hmc.reviews << review3
review4 = Review.create(album_id: hb.id, user_id: tom.id, rating: 5,
    content: "This album was great.")
    hb.reviews << review4

#This table may be completely unnecessary. We'll see.
AlbumReview.create(album_id: review1.album_id, review_id: review1.id)
AlbumReview.create(album_id: review2.album_id, review_id: review2.id)
AlbumReview.create(album_id: review3.album_id, review_id: review3.id)
AlbumReview.create(album_id: review4.album_id, review_id: review4.id)
