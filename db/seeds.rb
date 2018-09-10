# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

bob = User.create(username:"Bob")
tom = User.create(username:"Tom")

plini = Artist.create(name: "Plini", page_views: 0)
ff = Artist.create(name: "Fleet Foxes", page_views: 0)

hmc = Album.create(title: "Handmade Cities", art_url:"https://f4.bcbits.com/img/a2040672325_10.jpg",
  artist_id: plini.id, artist_name: plini.name, page_views: 0)
ot = Album.create(title: "Other Things", art_url:"https://f4.bcbits.com/img/a0873143341_10.jpg",
    artist_id: plini.id, artist_name: plini.name, page_views: 0)
hb = Album.create(title: "Helplessness Blues",
  art_url:"https://images-na.ssl-images-amazon.com/images/I/81z4V17odOL._SL1220_.jpg",
  artist_id: ff.id, artist_name: ff.name, page_views: 0)

review1 = Review.create(album_id: hmc.id, user_id: bob.id, rating: 4,
  content: "This album was great. Handmade Cities was a thoughtful prog album that I enjoyed having on both in the background or for more active listening." +
  " Electric Sunrise is my favorite track. It slowly builds into a really, beautiful, energetic piece. This album is upbeat and energetic.")
    hmc.reviews << review1
review2 = Review.create(album_id: ot.id, user_id: bob.id, rating: 4,
    content: "This EP was good. Heart is a bouncy track, that would be right at home being played outside in the summer around dusk at a craft beer bar." +
    "The notes have a tendency to strech out, and this lends to the already warm feel of the track. This EP was more surreal than the HMC album")
    ot.reviews << review2
review3 = Review.create(album_id: hmc.id, user_id: tom.id, rating: 5,
    content: "This album was good.")
    hmc.reviews << review3
review4 = Review.create(album_id: hb.id, user_id: tom.id, rating: 5,
    content: "This album was great.")
    hb.reviews << review4

#This table may be completely unnecessary. We'll see.
AlbumReview.create(album_id: review1.album_id, review_id: review1.id)
AlbumReview.create(album_id: review2.album_id, review_id: review2.id)
AlbumReview.create(album_id: review3.album_id, review_id: review3.id)
AlbumReview.create(album_id: review4.album_id, review_id: review4.id)
