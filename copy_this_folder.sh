origin_directory=${PWD##*/} # set the name of the current directory to variable 'origin_directory'
cd ../
sudo chown -R $USER:$(id -gn $USER) ./* # give permmisions in order to be able to adit the files
mkdir $1
cp -R ./$origin_directory/* ./$1
code ./$1
