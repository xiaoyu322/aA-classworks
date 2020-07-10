# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all
Comment.destroy_all

walker = User.create!(username: 'Wakka')
mike = User.create!(username: 'LikeMike')
michelle = User.create!(username: 'MKMK')
vanessa = User.create!(username: 'Vannie')
joe = User.create!(username: 'CupOfJoe')

artwork1 = Artwork.create!(title: 'StarryNight', image_url: 'https://www.vangoghgallery.com/img/starry_night_full.jpg', artist_id: walker.id )
artwork2 = Artwork.create!(title: 'AA', image_url: 'https://gameranx.com/wp-content/uploads/2020/04/AnimalCrossing-GirlWithPearlEarring.jpg', artist_id: joe.id)
artwork3 = Artwork.create!(title: 'Scream', image_url: 'shorturl.at/fxSVW', artist_id: mike.id)
artwork4 = Artwork.create!(title: 'Happy', image_url: 'https://gameranx.com/wp-content/uploads/2020/04/AnimalCrossing-BeautyLookingBack.jpg', artist_id: michelle.id)
artwork5 = Artwork.create!(title: 'Sad', image_url: 'https://gameranx.com/wp-content/uploads/2020/04/AnimalCrossing-BirthofVenus.jpg', artist_id: vanessa.id)
artwork6 = Artwork.create!(title: 'Thursday', image_url: 'https://gameranx.com/wp-content/uploads/2020/04/AnimalCrossing-HydrangeaneswithFowl.png', artist_id: walker.id)
artwork7 = Artwork.create!(title: 'Friday', image_url: 'https://gameranx.com/wp-content/uploads/2020/04/AnimalCrossing-Ladywithermine.jpg', artist_id: mike.id)

ArtworkShare.create!(artwork_id: artwork1.id, viewer_id: walker.id)
ArtworkShare.create!(artwork_id: artwork2.id, viewer_id: joe.id)
ArtworkShare.create!(artwork_id: artwork3.id, viewer_id: mike.id)
ArtworkShare.create!(artwork_id: artwork4.id, viewer_id: michelle.id)
ArtworkShare.create!(artwork_id: artwork5.id, viewer_id: vanessa.id)
ArtworkShare.create!(artwork_id: artwork6.id, viewer_id: walker.id)
ArtworkShare.create!(artwork_id: artwork7.id, viewer_id: mike.id)

comment1 = Comment.create!(user_id: walker.id, artwork_id: artwork1.id, body: 'aaaaaaaa')
comment2 = Comment.create!(user_id: joe.id, artwork_id: artwork2.id, body: 'bbbbbbbb')
comment3 = Comment.create!(user_id: mike.id, artwork_id: artwork3.id, body: 'cccccccc')
comment4 = Comment.create!(user_id: michelle.id, artwork_id: artwork4.id, body: 'dddddddd')
comment5 = Comment.create!(user_id: vanessa.id, artwork_id: artwork5.id, body: 'eeeeeeee')

like1 = Like.create!(user_id: walker.id, likeable_id: comment1.id, likeable_type: 'Comment')
like2 = Like.create!(user_id: walker.id, likeable_id: artwork1.id, likeable_type: 'Artwork')
like3 = Like.create!(user_id: joe.id, likeable_id: comment2.id, likeable_type: 'Comment')
like4 = Like.create!(user_id: mike.id, likeable_id: artwork2.id, likeable_type: 'Artwork')
like5 = Like.create!(user_id: michelle.id, likeable_id: comment3.id, likeable_type: 'Comment')