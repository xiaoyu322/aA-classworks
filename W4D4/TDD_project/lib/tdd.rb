def my_uniq(array)
    hash = Hash.new(0)
    array.each do |ele|
        hash[ele] +=1
    end
    return hash.keys
end

def two_sum(array)
    hash = {}
    result = []
    array.each_with_index do |ele, i|
        if hash.keys.include?(0 - ele)
            subarr = []
            subarr << hash[0 - ele]
            subarr << i   
            result << subarr 
        end
        hash[ele] = i
    end
    return result 
end

def my_transpose(array)
    row = array.length
    columns = array[0].length
    grid = Array.new(row) { Array.new(columns) }

    array.each_with_index do |row, row_idx|
        row.each_with_index do |col, col_idx|
            grid[row_idx][col_idx] = array[col_idx][row_idx]
        end
    end
    grid
end


def stock_picker(array)
    pairs = []
    array.each_with_index do |ele1, idx1|
        array.each_with_index do |ele2, idx2|
            if idx2 > idx1
                pairs << [ele1, ele2]
            end
        end
    end
    pairs
    
    profit = 0
    result = []
    pairs.each do |pair|
        if pair[1] - pair[0] > profit
            result = [array.index(pair[0]), array.index(pair[1])]
            profit = pair[1] - pair[0]
        end 
    end
    result
end
# p stock_picker([50, 25, 75, 100, 10]) # => [1, 3]

