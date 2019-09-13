# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

spot_1 = Spot.create!(title: 'Star Filled Skies', description: 'Enjoy open space. Write your next novel. See how stars can truly fill a night sky. Shut down technology and go back to the days of old on this private five acre parcel tucked away from the city. Relax and let nature lend a therapeutic hand. Enjoy! You are now in a state of mindfulness...',
    check_in:'9:00', check_out:'10:00', on_arrival: 'Go straight to camp', max_capacity: 6, lat:38.749475, lng:-105.888503, tent: false, 
    sites: 1, parking: true, campfire: true, pets: true, toilet: false, water: false, shower: false, hiking: true, swimming: false, fishing: true, wildlife: true, price: 55, host_id: 1)


spot_2 = Spot.create!(title: 'Glamping at Round Mountain', description: '30 foot yurt at the base of Round Mountain with stunning views in all directions. Just 10 miles from Crested Butte and endless recreating available or quiet solitude on the farm.',
    check_in:'15:00', check_out:'11:00', on_arrival: 'Meet and greet', max_capacity: 4, lat:38.599303, lng:-106.533473, tent: true, 
    sites: 1, parking: true, campfire: true, pets: false, toilet: true, water: true, shower: true, hiking: true, swimming: true, fishing: true, wildlife: true, price: 150, host_id: 1)


spot_3 = Spot.create!(title: 'Romantic Cabin', description: 'If you dreamed of a cozy, romantic log cabin to enjoy for a few days, this is what you have been looking for. You will never forget the bright blue sky against Mount Elbert, Colorado’s highest peak, the view of beaver ponds, all sitting by the woodstove, staring at the fire through its glass door, in a big cushy leather chair. 4 cabins sitting on 60 acres, backed by national forest. Leadville has more open space with more trails than you can imagine.',
    check_in:'16:00', check_out:'11:00', on_arrival: 'Go straight to camp', max_capacity: 12, lat:39.479638, lng:-106.735902, tent: true, 
    sites: 20, parking: true, campfire: true, pets: true, toilet: true, water: true, shower: true, hiking: true, swimming: true, fishing: true, wildlife: true, price: 220, host_id: 1)


spot_4 = Spot.create!(title: 'Mount Haven', description: 'Mountain Haven Ranch offers a truly unique, off-grid experience, while taking in the beautiful scenery with up close, breath-taking views of Pikes Peak and surrounding mountains. Roam free on the 35 acres of beautiful country with miles of surrounding BLM land!',
    check_in:'15:00', check_out:'12:00', on_arrival: 'Go straight to camp', max_capacity: 20, lat: 38.887807, lng: -105.168398, tent: false, 
    sites: 1, parking: true, campfire: true, pets: true, toilet: true, water: true, shower: true, hiking: true, swimming: true, fishing: true, wildlife: true, price: 220, host_id: 1)


spot_5 = Spot.create!(title: 'Cabin on the White River', description: 'Cabin is surrounded by a 1,000,000 acres of beautiful White River National forest and Flat Tops Wilderness. The cabin sets above the banks of the White River on our 120 acre private ranch property.',
    check_in:'11:00', check_out:'11:00', on_arrival: 'Go straight to camp', max_capacity: 6, lat: 39.675517, lng: -107.700365, tent: true, 
    sites: 1, parking: true, campfire: true, pets: true, toilet: true, water: true, shower: true, hiking: true, swimming: false, fishing: true, wildlife: true, price: 99, host_id: 2)

    
spot_6 = Spot.create!(title: 'Itty Bitty Lakes Campground', description: 'Itty Bitty Lakes is an old fashioned campground on Highway 50 and the Arkansas River in Bighorn Sheep Canyon. The canyon opens out to be a small valley bordered by the Sangre de Cristo Mountains peaking at over 13,000 feet to the immediate south, the wild Arkansas River, then cliffs and smaller mountains to the north. Nestled in the Valley is the village of Coaldale, established in 1878.',
    check_in:'12:00', check_out:'12:00', on_arrival: 'Meet and greet', max_capacity: 25, lat: 39.299370, lng: -106.367257, tent: false, 
    sites: 17, parking: true, campfire: true, pets: true, toilet: true, water: true, shower: true, hiking: true, swimming: false, fishing: true, wildlife: true, price: 35, host_id: 2)


spot_7 = Spot.create!(title: 'Imogene Pass Catered Glamping', description: 'The Meadows Tent is located at 11,200 ft. in Richmond Basin off the Imogene Pass jeep trail between Ouray and Telluride, Colorado. Situated in a gorgeous meadow, the 16x24 tent is pitched on a deck May through October and outfitted with bunks, a table, LED lanterns which can also charge devices, chairs and a wood burning stove.',
    check_in:'12:00', check_out:'11:00', on_arrival: 'Meet and greet', max_capacity: 8, lat: 38.229564, lng: -107.739445, tent: false, 
    sites: 1, parking: true, campfire: true, pets: true, toilet: true, water: true, shower: true, hiking: true, swimming: false, fishing: false, wildlife: true, price: 150, host_id: 2)
    
    
spot_8 = Spot.create!(title: 'Little Cabin with a view', description: 'Cozy Little Cabin nestled high on a hill in some Pine trees with a view. This one room Little Cabin is a perfect place to get away from the hustle and bustle of life. The view out the front door is beautiful. There is a Fire Pit, Picnic Table and Gazebo up the hill from the Little Cabin. The Gazebo provides a great space to practice meditation or yoga under the clear blue/stary WYOMING skies. Star gazing and full moons are magnificent here and the sun doesn’t make it over the mountain until after 9am so sleeping in after star gazing is easy.',
    check_in:'13:00', check_out:'11:00', on_arrival: 'Meet and greet', max_capacity: 2, lat: 40.676425, lng: -105.998172, tent: true, 
    sites: 1, parking: true, campfire: true, pets: true, toilet: true, water: true, shower: true, hiking: true, swimming: false, fishing: false, wildlife: true, price: 90, host_id: 2)  


User.create!(username: 'Guest', email: 'guest@gmail.com', password:'password')


file1_1 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot1-1.jpg')
file1_2 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot1-2.jpg')
file1_3 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot1-3.jpg')
file1_4 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot1-4.jpg')
file1_5 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot1-5.jpg')

spot_1.photos.attach(io: file1_1, filename: 'spot1-1.jpg')
spot_1.photos.attach(io: file1_2, filename: 'spot1-2.jpg')
spot_1.photos.attach(io: file1_3, filename: 'spot1-3.jpg')
spot_1.photos.attach(io: file1_4, filename: 'spot1-4.jpg')
spot_1.photos.attach(io: file1_5, filename: 'spot1-5.jpg')



file2_1 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot2-1.jpg')
file2_2 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot2-2.jpg')
file2_3 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot2-3.jpg')
file2_4 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot2-4.jpg')
file2_5 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot2-5.jpg')

spot_2.photos.attach(io: file2_1, filename: 'spot2-1.jpg')
spot_2.photos.attach(io: file2_2, filename: 'spot2-2.jpg')
spot_2.photos.attach(io: file2_3, filename: 'spot2-3.jpg')
spot_2.photos.attach(io: file2_4, filename: 'spot2-4.jpg')
spot_2.photos.attach(io: file2_5, filename: 'spot2-5.jpg')




file3_1 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot3-1.jpg')
file3_2 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot3-2.jpg')
file3_3 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot3-3.jpg')
file3_4 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot3-4.jpg')
file3_5 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot3-5.jpg')

spot_3.photos.attach(io: file3_1, filename: 'spot3-1.jpg')
spot_3.photos.attach(io: file3_2, filename: 'spot3-2.jpg')
spot_3.photos.attach(io: file3_3, filename: 'spot3-3.jpg')
spot_3.photos.attach(io: file3_4, filename: 'spot3-4.jpg')
spot_3.photos.attach(io: file3_5, filename: 'spot3-5.jpg')



file4_1 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot4-1.jpg')
file4_2 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot4-2.jpg')
file4_3 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot4-3.jpg')

spot_4.photos.attach(io: file4_1, filename: 'spot4-1.jpg')
spot_4.photos.attach(io: file4_2, filename: 'spot4-2.jpg')
spot_4.photos.attach(io: file4_3, filename: 'spot4-3.jpg')



file5_1 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot5-1.jpg')
file5_2 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot5-2.jpg')
file5_3 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot5-3.jpg')
file5_4 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot5-4.jpg')

spot_5.photos.attach(io: file5_1, filename: 'spot5-1.jpg')
spot_5.photos.attach(io: file5_2, filename: 'spot5-2.jpg')
spot_5.photos.attach(io: file5_3, filename: 'spot5-3.jpg')
spot_5.photos.attach(io: file5_4, filename: 'spot5-4.jpg')



file6_1 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot6-1.jpg')
file6_2 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot6-2.jpg')
file6_3 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot6-3.jpg')
file6_4 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot6-4.jpg')
file6_5 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot6-5.jpg')

spot_6.photos.attach(io: file6_1, filename: 'spot6-1.jpg')
spot_6.photos.attach(io: file6_2, filename: 'spot6-2.jpg')
spot_6.photos.attach(io: file6_3, filename: 'spot6-3.jpg')
spot_6.photos.attach(io: file6_4, filename: 'spot6-4.jpg')
spot_6.photos.attach(io: file6_5, filename: 'spot6-5.jpg')



file7_1 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot7-1.jpg')
file7_2 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot7-2.jpg')
file7_3 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot7-3.jpg')
file7_4 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot7-4.jpg')
file7_5 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot7-5.jpg')
file7_6 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot7-6.jpg')

spot_7.photos.attach(io: file7_1, filename: 'spot7-1.jpg')
spot_7.photos.attach(io: file7_2, filename: 'spot7-2.jpg')
spot_7.photos.attach(io: file7_3, filename: 'spot7-3.jpg')
spot_7.photos.attach(io: file7_4, filename: 'spot7-4.jpg')
spot_7.photos.attach(io: file7_5, filename: 'spot7-5.jpg')
spot_7.photos.attach(io: file7_6, filename: 'spot7-6.jpg')


file8_1 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot8-1.jpg')
file8_2 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot8-1.jpg')
file8_3 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot8-1.jpg')
file8_4 = open('https://we-camp-seeds.s3.us-east-2.amazonaws.com/spot8-1.jpg')

spot_8.photos.attach(io: file8_1, filename: 'spot8-1.jpg')
spot_8.photos.attach(io: file8_2, filename: 'spot8-2.jpg')
spot_8.photos.attach(io: file8_3, filename: 'spot8-3.jpg')
spot_8.photos.attach(io: file8_4, filename: 'spot8-4.jpg')



  



    

