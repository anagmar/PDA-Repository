require('minitest/autorun')
require('minitest/rg')
require_relative('../card.rb')
require_relative('../testing_task_2.rb')


class TestCard < MiniTest::Test

  def setup()
    @card1 = Card.new('diamonds', 7)
    @card2 = Card.new('hearts', 6)
    @card3 = Card.new('spades', 5)
    @card4 = Card.new('clubs', 1)

    @cards = [@card1, @card2 , @card3 , @card4]
  end

  #test check_for_ace
  def test_card_suit_for_ace
    assert_equal(true, CardGame.check_for_ace(@card4))
  end

#test check_for_ace for other card
  def test_card_suit_for_other_card
    assert_equal(false, CardGame.check_for_ace(@card2))
  end

#test for highest_card 1
def test_highest_card_for_two_cards
  assert_equal(@card1, CardGame.highest_card(@card1,@card2))
end

#test cards_total
def test_cards_total
  assert_equal("You have a total of 19", CardGame.cards_total(@cards))
end


end
