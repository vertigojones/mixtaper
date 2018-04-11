class Api::MixtapesController < ApplicationController
    def index
        @mixtapes = Mixtape.all
        
        render json: {
          mixtapes:  @mixtapes
        }
      end
    
      def create
        @mixtape = Mixtape.create!(mixtape_params)

        render json: @mixtapes
      end
    
      def show
        @mixtape = Mixtape.find(params[:id])

        @songs = @mixtape.songs
        render json: {
          mixtape: @mixtape,
          songs: @songs
        }   
      end
    
      def update
        @mixtape = Mixtape.find(params[:id])
        @mixtape.update!(mixtape_params)
    
        render json: @mixtape
      end
    
      def destroy
        @mixtape = Mixtape.find(params[:id]).delete
    
        render status: :ok
      end
    
      private
    
      def mixtape_params
        params.require(:mixtape).permit(:title, :created_by, :created_for, :dedication)
      end
end
