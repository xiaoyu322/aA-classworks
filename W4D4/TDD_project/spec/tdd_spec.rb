require "tdd"

describe "my_uniq" do
    it "should remove all the duplicate elements and return a new array" do
        expect(my_uniq([1, 2, 1, 3, 3])).to eq([1, 2, 3])
    end

    it "should not accept a string as an arg" do
        expect{ my_uniq(" ") }.to raise_error()
    end

end
     
describe "two_sum" do
    it "should find all pairs of positions where the elements at those positions sum to zero" do
        expect(two_sum([-1, 0, 2, -2, 1])).to eq([[2, 3], [0, 4]])
    end
end

describe "my_transpose" do
    let(:array) { [[0, 1, 2],[3, 4, 5],[6, 7, 8]] }
    it "should convert between the row-oriented and column-oriented respresentations" do
        expect(my_transpose(array)).to eq([[0, 3, 6],[1, 4, 7],[2, 5, 8]])
    end

    it "should not use the built-in method Array#transpose" do
        expect(array).not_to receive(:transpose)
    end
    
end

describe "stock_picker" do
    # let(:array) { [50, 25, 75, 100, 10] }
    it "should take an array of stock prices" do
        expect{stock_picker()}.to raise_error
    end

    it "shoud output the most profitable pair of days (indices)" do
        expect(stock_picker([50, 25, 75, 100, 10])).to eq([1, 3])
    end
end

