story = [
  'Fry is born without a delta brainwave',
  'As a result, Fry is cryogenically frozen until 2999',
  'In the future, Fry works on a spaceship',
  'The spaceship hits a wormhole and crashes in 1941 Roswell, NM',
  'Fry encounters his grandmother, then inadvertently sires his father'
]

puts story[0]

puts "Should we continue? "
response = gets.chomp
story_index = 1

while response == "y" do

  if story_index <= 4
    puts story[story_index]
    puts "Should we continue? "
    response = gets.chomp
    story_index += 1

  else
    story_index = 0
  end
      break if response == "n"
end
