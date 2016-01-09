class Word
  def initialize(original_word)
    @original_word = original_word
  end

  def original_word
    return @original_word.downcase
  end

  def piglatinize
    if is_vowel?(original_word[0])
      puts original_word + "way"

    else
      # find index of first vowel
      index = index_of_first_vowel

      puts original_word[index...original_word.length] + original_word[0...index] + "ay"

    end
  end

  def index_of_first_vowel
    index = 0
    original_word.each_char do |i|
      if is_vowel?(i)
        break
      else
        index += 1
      end
    end
    return index
  end

  def is_vowel?(letter)
    (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
  end

end

puts "Enter word: "
response = gets.chomp
word = Word.new(response)
word.piglatinize

