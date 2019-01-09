### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame
#1.this method is using camel case (used in JS) but Ruby's conventions is snake case with underscore
#2.card.value needs a 'double == 1'
#3.Add to self to the beginning of the method.
  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

# Ruby function starts with def not dif
# There is an extra 'end'
#There should be a comma between card1, card2, as they are two variables
#It should return 'card1' not card.name since it does not have a name
#The indentation conventions should have the if statement indented
#There should be a return for card2
  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    card2
  end
end
end

#The total should be initially equal to 0
#the return needs to be out of the 'for' loop to return the total
#the return statement can be written as "You have a total of #{total}"
def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end


```
