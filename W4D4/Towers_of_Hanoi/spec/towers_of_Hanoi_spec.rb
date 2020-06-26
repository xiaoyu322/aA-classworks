require 'towers_of_Hanoi'

describe TowersOfHanoi do

    let(:game) { TowersOfHanoi.new }

    describe "#initialize" do
        it "shoud instatiate three towers correctly" do 
            expect(game.towers).to eq([[4, 3, 2, 1], [], []])
        end

        it "raises an error when an argument is passed" do 
            expect{ TowersOfHanoi.new([]) }.to raise_error(ArgumentError)
        end
    end
    
    describe "#[]" do
        it "shoud accpet an index representing the tower" do 
            tower = 1
            game[tower]
        end
        it "should return the tower of @towers" do
            tower = 0
            expect(game[tower]).to eq([4, 3, 2, 1])
        end
    end

    describe "#move_disc" do
        it "should move disc from pick_tower to put_tower" do
            pick_tower = 0
            put_tower = 1
            expect(game.move_disc(pick_tower, put_tower)).to eq([1])
        end

        it "raise an error if less than two arguments given" do 
            expect{ game.move_disc()}.to raise_error(ArgumentError)
        end
    end

    describe "#won?" do
        it "should check if the game has been won" do
            winning_towers = [4, 3, 2, 1]
            tower = 2
            expect(game[tower]).to eq(winning_towers)
        end

        it "should return true" do
            winning_towers = [[], [], [4, 3, 2, 1]]
            allow(game.towers).to receive(:towers).and_return(winning_tower)
            expect(game.won?).to eq(true)
        end
    end

end