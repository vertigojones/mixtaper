class Api::SongsController < ApplicationController
    def index
        @mixtape = Mixtape.find(params[:mixtape_id])
        @songs = @mixtape.songs
        render json: {
          songs: @songs
        }
      end
    
      def show
        @song = Song.find(params[:id])
        render json: {
          song: @song
        }
      end
    
      def create
        @mixtape = Mixtape.find(params[:mixtape_id])
        @song = @mixtape.songs.create(song_params)
        render json: {
          song: @song
        }
      end
    
      def update
        @mixtape = Mixtape.find(params[:mixtape_id])
        @song = @mixtape.songs.find(params[:id])
        @song.update!(song_params)
        render json: {
          song: @song
        }
      end
    
      def destroy
        Song.find(params[:id]).destroy
    
        render json: {
          message: "Song successfully destroyed"
        }
      end
    
      private
    
      def song_params
        params.require(:song).permit(:track, :artist, :title, :length )
      end
end
