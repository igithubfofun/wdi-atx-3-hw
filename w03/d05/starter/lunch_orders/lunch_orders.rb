orders = []
items = []

while true do
 persons = {}

 print "Name for order: "
 name = gets.chomp.downcase
 break if name == "no"

  while true do
    print "#{name} wants to order: "
    order = gets.chomp.downcase

    if order == "no"
     items = []
     break
    end

    persons["name"] = name
    persons["orders"] = items.push(order)

  end

  orders.push(persons)

end

puts orders
