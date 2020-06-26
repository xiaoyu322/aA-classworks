class TowersOfHanoi

    attr_reader :towers

    def initialize 
        @towers = [[4, 3, 2, 1], [], []]
    end

    def [](tower)
        @towers[tower]
    end

    def render_towers
        puts " #{@towers[0][-1]}  |  #{@towers[1][-1]}  |  #{@towers[2][-1]} "
        puts " #{@towers[0][-2]}  |  #{@towers[1][-2]}  |  #{@towers[2][-2]} "
        puts " #{@towers[0][-3]}  |  #{@towers[1][-3]}  |  #{@towers[2][-3]} "
        puts " #{@towers[0][-4]}  |  #{@towers[1][-4]}  |  #{@towers[2][-4]} "
    end


    def game
        until won?
            p "Which tower do you want to select?, eg: '0'"
            pick_tower = gets.chomp.to_i

            p "which tower do you want to put the disc, eg: '2'"
            put_tower = gets.chomp.to_i
            
            move_disc(pick_tower, put_tower)
            self.render_towers
        end
        p "You win!"
    end

    def move_disc(pick_tower, put_tower)
        disc = self[pick_tower].pop 
        self[put_tower].push(disc)
    end
    
    def won?
        winning_tower = [4, 3, 2, 1]
        if self[0].empty? && self[1].empty? && self[2] == winning_tower
            return true
        end
        return false 
    end

end