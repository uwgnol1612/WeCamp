# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Spot.create!(title: 'Star Filled Skies', description: 'Enjoy open space. Write your next novel. See how stars can truly fill a night sky. Shut down technology and go back to the days of old on this private five acre parcel tucked away from the city.Relax and let nature lend a therapeutic hand. Enjoy! You are now in a state of mindfulness...',
    check_in:'9:00', check_out:'10:00', on_arrival: 'Go straight to camp', max_capacity: 6, lat:38.749475, lng:-105.888503, tent: false, 
    sites: 1, parking: true, campfire: true, pets: true, toilet: false, water: false, shower: false, hiking: true, swimming: false, fishing: true, wildlife: true, price: 55, host_id: 1)

#  spot = Spot.find(8)
#  file = File.open('app/assets/images/spot8-4.jpg') 
#  spot.photos.attach(io: file, filename: 'spot8-4.jpg')  

Spot.create!(title: 'Glamping at Round Mountain', description: '30 foot yurt at the base of Round Mountain with stunning views in all directions. Just 10 miles from Crested Butte and endless recreating available or quiet solitude on the farm.',
    check_in:'15:00', check_out:'11:00', on_arrival: 'Meet and greet', max_capacity: 4, lat:38.599303, lng:-106.533473, tent: true, 
    sites: 1, parking: true, campfire: true, pets: false, toilet: true, water: true, shower: true, hiking: true, swimming: true, fishing: true, wildlife: true, price: 150, host_id: 1)


Spot.create!(title: 'Romantic Cabin', description: 'If you dreamed of a cozy, romantic log cabin to enjoy for a few days, this is what you have been looking for. You will never forget the bright blue sky against Mount Elbert, Colorado’s highest peak, the view of beaver ponds, all sitting by the woodstove, staring at the fire through its glass door, in a big cushy leather chair. 4 cabins sitting on 60 acres, backed by national forest. Leadville has more open space with more trails than you can imagine.',
    check_in:'16:00', check_out:'11:00', on_arrival: 'Go straight to camp', max_capacity: 12, lat:39.479638, lng:-106.735902, tent: true, 
    sites: 20, parking: true, campfire: true, pets: true, toilet: true, water: true, shower: true, hiking: true, swimming: true, fishing: true, wildlife: true, price: 220, host_id: 1)


Spot.create!(title: 'Mount Haven', description: 'Mountain Haven Ranch offers a truly unique, off-grid experience, while taking in the beautiful scenery with up close, breath-taking views of Pikes Peak and surrounding mountains. Roam free on the 35 acres of beautiful country with miles of surrounding BLM land!',
    check_in:'15:00', check_out:'12:00', on_arrival: 'Go straight to camp', max_capacity: 20, lat: 38.887807, lng: -105.168398, tent: false, 
    sites: 1, parking: true, campfire: true, pets: true, toilet: true, water: true, shower: true, hiking: true, swimming: true, fishing: true, wildlife: true, price: 220, host_id: 1)


Spot.create!(title: 'Cabin on the White River', description: 'Cabin is surrounded by a 1,000,000 acres of beautiful White River National forest and Flat Tops Wilderness. The cabin sets above the banks of the White River on our 120 acre private ranch property.',
    check_in:'11:00', check_out:'11:00', on_arrival: 'Go straight to camp', max_capacity: 6, lat: 39.675517, lng: -107.700365, tent: true, 
    sites: 1, parking: true, campfire: true, pets: true, toilet: true, water: true, shower: true, hiking: true, swimming: false, fishing: true, wildlife: true, price: 99, host_id: 2)

    
Spot.create!(title: 'Itty Bitty Lakes Campground', description: 'Itty Bitty Lakes is an old fashioned campground on Highway 50 and the Arkansas River in Bighorn Sheep Canyon. The canyon opens out to be a small valley bordered by the Sangre de Cristo Mountains peaking at over 13,000 feet to the immediate south, the wild Arkansas River, then cliffs and smaller mountains to the north. Nestled in the Valley is the village of Coaldale, established in 1878.',
    check_in:'12:00', check_out:'12:00', on_arrival: 'Meet and greet', max_capacity: 25, lat: 39.299370, lng: -106.367257, tent: false, 
    sites: 17, parking: true, campfire: true, pets: true, toilet: true, water: true, shower: true, hiking: true, swimming: false, fishing: true, wildlife: true, price: 35, host_id: 2)


Spot.create!(title: 'Imogene Pass Catered Glamping', description: 'The Meadows Tent is located at 11,200 ft. in Richmond Basin off the Imogene Pass jeep trail between Ouray and Telluride, Colorado. Situated in a gorgeous meadow, the 16x24 tent is pitched on a deck May through October and outfitted with bunks, a table, LED lanterns which can also charge devices, chairs and a wood burning stove.',
    check_in:'12:00', check_out:'11:00', on_arrival: 'Meet and greet', max_capacity: 8, lat: 38.229564, lng: -107.739445, tent: false, 
    sites: 1, parking: true, campfire: true, pets: true, toilet: true, water: true, shower: true, hiking: true, swimming: false, fishing: false, wildlife: true, price: 150, host_id: 2)
    
    
Spot.create!(title: 'Little Cabin with a view', description: 'Cozy Little Cabin nestled high on a hill in some Pine trees with a view. This one room Little Cabin is a perfect place to get away from the hustle and bustle of life. The view out the front door is beautiful. There is a Fire Pit, Picnic Table and Gazebo up the hill from the Little Cabin. The Gazebo provides a great space to practice meditation or yoga under the clear blue/stary WYOMING skies. Star gazing and full moons are magnificent here and the sun doesn’t make it over the mountain until after 9am so sleeping in after star gazing is easy.',
    check_in:'13:00', check_out:'11:00', on_arrival: 'Meet and greet', max_capacity: 2, lat: 40.676425, lng: -105.998172, tent: true, 
    sites: 1, parking: true, campfire: true, pets: true, toilet: true, water: true, shower: true, hiking: true, swimming: false, fishing: false, wildlife: true, price: 90, host_id: 2)  







    

