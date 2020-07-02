
require "byebug"
# Phase I N^2
def my_min(arr)
    new_arr = 0
    arr.each_with_index do |ele, i|
        arr.each_with_index do |ele2, i2|
            if ele2 < ele && ele2 < new_arr
                new_arr = ele2
            elsif ele < ele2 && ele < new_arr
                new_arr = ele
            end
        end
    end
    return new_arr
end

# Phaze II n
def my_min(arr)
    min = 0
    arr.each do |num|
        if num < min 
            min = num
        end
    end
    min
end
# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)

# Phase I n^3
def largest_sum(arr)
    sub_sum = []
    arr.each_with_index do |num1,i|
        arr.each_with_index do |num2,j| 
            if i <= j 
                sub_sum << arr[i..j]
            end
        end
        
    end

    largest = sub_sum[0].sum
    sub_sum.each do |sub|
        if sub.sum > largest
            largest = sub.sum
        end
    end
    largest 

    # sub_sum.inject do |acc,ele| 
    #     if acc.sum > ele.sum
    #         acc.sum
    #     else
    #         acc.sum = ele.sum
    #     end
    # end
end

# Phase II N
    def largest_sum(arr)
        largest_sum = arr.first
        current_sum = 0
        i = 0
        while i < arr.length 
            # debugger
            if current_sum < 0
                current_sum = 0
            end
            current_sum += arr[i]
            if current_sum > largest_sum
                largest_sum = current_sum
            end
            i+=1
        end
        largest_sum
    end

    # list = [2, 3, -6, 7, -6, 7]     #5 -6   -1
    list = [-1, -5, -3]             #[-1, -3, -5]   -3 
    p largest_sum(list)

    

    
