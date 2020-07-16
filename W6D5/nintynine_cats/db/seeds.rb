# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.destroy_all 

cat1 = Cat.create!(birth_date: '2017/01/20', color: "Black", name: 'Wakka', sex: "M", description: 'The black cat!')
cat2 = Cat.create!(birth_date: '2018/07/10', color: "Gray", name: 'Luna', sex: "F", description: 'The sassy cat!')
cat3 = Cat.create!(birth_date: '2019/05/01', color: "White", name: 'Mkmk', sex: "F", description: 'The cute cat!')
cat4 = Cat.create!(birth_date: '2017/04/20', color: "Orange", name: 'Garfield', sex: "M", description: 'The lazy cat!')