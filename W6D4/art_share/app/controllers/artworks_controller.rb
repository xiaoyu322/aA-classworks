class ArtworksController < ApplicationController

    def index
        # debugger
        if params[:user_id]
            artworks = Artwork.where(artist_id: params[:user_id])
        else 
            artworks = Artwork.all
        end 
        render json: artworks
    end

# what is params exactly 

    def create
        artwork = Artwork.new(artwork_params)
        if artwork.save
            render json: artwork
        else 
            render json: artwork.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
        artwork = Artwork.find(params[:id])
        render json: artwork
    end

    def update
        artwork = Artwork.find(params[:id])
        if artwork.update(artwork_params)
            redirect_to "/artworks/#{artwork.id}" #show action here
        else 
            render json: artwork.errors.full_messages, status: 422 
        end
    end

    def destroy
        artwork = Artwork.find(params[:id])
        artwork.destroy
        render json: artwork
    end

    private 
    def artwork_params
        params.require(:artwork).permit(:title, :image_url, :artist_id)
    end
end