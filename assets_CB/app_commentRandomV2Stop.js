var app = angular.module('CommentApp', []);

app.controller('PostController', function($scope, $timeout, $interval, fileReader) {
				
				// tie the view to ngModule which saves the JSON to localStorage
    		$scope.comments = localStorage.getItem("comments", "imageSrc");
				$scope.comments = (localStorage.getItem('comments', 'imageSrc')!==null) ? JSON.parse($scope.comments) : [];
				localStorage.setItem('comments', JSON.stringify($scope.comments));
				console.log("Before submit : "+$scope.comments);

        let namesArr = ["$dollar-Man", "Donovan", "Henry$Money", "Jake", "Michael", "sanchez@fb", "mike2023", "itzMeJohn", "johnny", "Crypto-King", "@crypto_mania", "liliard", "Pablo-77", "ZuckerBank", "Gerald4Gold", "Omar", "Blue Wolf", "jason93@fb", "Vitalik_Mask", "jezzy", "Seth1990", "'Lorenzo'", "CASTRO", "alejandro", "LBJ23", "SASZUKE", "sanchez", "Karl03", "Crypto-Mania", "$hibaInu", "Dr.Ether", "Gab Watson", "DodgeMoon", "Prince-El", "elon", "Master-G", "Jim", "John33", "Brett Wilson", "Nick&Mike", "Randy", "Steven Likens", "Marc", "thomas02", "Trex", "Ethan", "Bitget@Max"];

        let namesArr2 = ["$amuel_Jana", "Dana", "Jaq$arah", "Jenny", "Michelle", "sandra", "mich23Luna", "Yassie-ETH", "johanBTC", "amanda", "crypto_queen20", "dolla$-Queen", "Paulina", "akira", "GoldAshley", "Olivia", "Lady Micah", "alice", "Brenda White", "jena¥50Mil", "lanie", "Lala", "CHRISTIE", "ashley", "puffKirby", "Jen", "Samantha", "Susan100%", "Crazy-Girl^^", "Cassie", "monica", "Teresa Holmes"];
        
        let chatArr = ["Never seen anyrhing like that, but lucky it worked! Thanks.", "Got 0.78 eth THANK YOU VITALIK", "NEVER DOUBT VITAL", "HI!", "I GOT FUCKING 3.7 OMG", "IM IN!!", "this is insane +4.0", "VERY NICE GUYS", "Recieved 97 000 bucks in eth OMG VITALIK BUTERIN I LOVE YOU!", "awesome offer can I use it 1 more time? I shouldve sent more...", "GOT 10", "wtf it worked", "May the God be with you.", "I was doubting for a long time if I should send here my 4 eth, but it actually worked for me so I got 8 eth now thanks to ethereum.", "OH SHIT IT WORKS!!!!!!!", "thanks for 30 eth. fine here!", "OH FUCK I GOT THE RETURM ! THANKS", "Gracias papi", "9.34 eth", "crypto is a bubble...", "8 eth ON MY WALLET", "This is going to change my life!", "+240k", "HERE I AM, GOT $450k FUCKING INSANE THING!!!!!!", "VITALIK WE LOVE YOU!!!", "got 21 bits on my wallet now :)", "You better be fast guys!", "Vitalik never dissapoints!!", "+12.44", "I sold all by eth a day ago ;(", "GOTTA BUY A BRAND NEW CHEVY!! 18 thousand bucks", "+78K$. this is an actual nonsence", "GENEROUS PRESENT!", "I was lucky to get my $120,000.", "I CANT IMAGINE WHAT WILL HAPPEN WITH THE PRICE", "GOD BLESSF YOU !", "Hell yeah got my 250,000,000 doubled! ", "wish i hsd more money to send... +1 of eth", "ONE TIME OPPORTUNITY ", "4.32 eth", "OHHHH COME HERE $$$$$$", "Thank you Vitalik Buterin! From me and my son.", "7.8 eth !", "eth INU TO 100k$", "BIG PUMP IS COMING", "Thank you for everything.", "WHAAAAAAT??", "3 eth", "got 30eth, not too much but thank you!", "I recieved 1.5 eth as well. This is a fine investment.", "Buterin CRYPTOKING!", "THANKS FOR THE NEW CAR", "God Bless Vitalik Buterin!", "9.83 ye", "OH YES!", "+4.18", "eth TO THE MOON", "WOW", "+38.4K!!!!", "does it doubles the amount you send?", "Ill take my chances", "can I have more?", "I AM HAPPY", "OH YESSS 311KK", "THANKS!", "+ 25eth", "HOW IS THIS POSSIBLE?", "Hello everyone!", "WHAT", "BUTERIN IS THE BEST", "How much left??????", "it took a couple of minutes but I got $13,000 ", "Really?", "BUTERIN IS THE KING!", "SpaceX launch soon?", "+ 20K bucks", "omg this is real!", "+13K", "I LOVE YOU VITALIK", "THATS GOOD!", "Got some!", "HEYYY", "MY GOD", "2eth? yeah", "how you doing guys? xD", "WOOOOOOOOW!!", "How can I contact Vitalik?", "Unbeliveable charity!", "GOT 7.27!!!!!!!!", "Thats greatful!", "Changed my mind on eth. THANK YOU!", "5.34", "eth GOES 1mil$", "thanks much !!!!", "I want to participate again!!!!!!!!", "just recieved 41.9 eth", "Please give me some more!", "Very good.", "I CANT BELIEVE IT", "i actually got 5.64 eth back what the fuck?", "Tell your friends!", "+ 3.8", 'THAT"S BEAUTIFUL!', "GOT $200k OMG", "Too good!", "eth 4 LIFE", "I will remember this moment forever! Recieved 450,000", "Thank god Im on time", "THIS IS SICK!", "this is magic", "20,00 eth !!!", "Hi everyone :)", "HYPE!", "I love you Vitalik Buterin!!", "I bless you eth!!", "+ eth 10.8", "thanks for letting me participate!", 'Should"ve deposited more....', "Hello!", "thanks for 22.4", "42.8 I CANT BELIVE MY EYES!!!!", "Im not gonna work again just trading :D", "OOOOMMMGG!!!!!!!!!!!!!!!!!", "Glad I figured all out! Now I got some money to invest.", "Thank god.", "LETS GO GUYS", "ETH $10k SOON", "+ 40.3 eth !", "Chill out", "I got 20.0 eth", "GOOD LUCK EVERYONE! I gotr my cut already", "SO HAPPY!", "omg recieved 400k backl!!!!!", "recieived some eth thanks", "Who else if not vitalik could help us ", "Vitalik Buterin!!", "+ 35.3874 eth", "YEAH BITCH", "Im very thankful", "NEW eth ATH COMING", "Perfect", "WE LOVE YOU VITALIK", "HI", "I WISH I HAD MORE eth TO SEND", "+54.2", "Thats for real", "IT IS ACTUAL", "AWESOME", "7.4288", "eth GOES 100k$", "eth ROCKET"];

        let imagesArr = ["https://i.ibb.co/sbnRv3h/pix1.jpg", "https://i.ibb.co/xCjYF5Y/pix3.jpg", "https://i.ibb.co/v1c2s8f/pix2.jpg"];

        

			
				$scope.submit = function() {
          $scope.comments.unshift({
						nameTxt: $scope.nameTxt +":",
            commentTxt: $scope.commentTxt,
            imageSrc: localStorage.getItem('myImage') || 'unknown-profile.png'
					});
					localStorage.setItem("comments", JSON.stringify($scope.comments));
					console.log("After submit : "+$scope.comments);
				};
				
    $scope.imageSrc = localStorage.getItem('myImage'); //---> added this code to get and view image on localstorage//
    
    $scope.$on("fileProgress", function(e, progress) {
      $scope.progress = progress.loaded / progress.total;
    });

//---> Added Script to Show / Hide String on Comment Start Here (Doesn't Work)//
//---> Added Script to Show / Hide String on Comment Start Here (Doesn't Work)//

    
    // Initial 50 characters will be displayed.
  //   $scope.strLimit = 50;

  //   // String
  //   $scope.jobs = {
  //     description: "Hi. I have a list of items along with their information. The problem is I want to show the description up to 50 letters, but if it exceeds this value I want to show show more button upon clicking it I want to show the full text. I want to do it with filters, but I don't know one could achieve this with my way."
  //   };

  // // Event trigger on click of the Show more button.
  //  $scope.showMore = function() {
  //    $scope.strLimit = $scope.jobs.description.length;
  //  };

  // // Event trigger on click on the Show less button.
  //  $scope.showLess = function() {
  //    $scope.strLimit = 50;
  //  };

//---> Added Script to Show / Hide String on Comment End Here//
//---> Added Script to Show / Hide String on Comment End Here//


  });




  app.directive("ngFileSelect", function(fileReader, $timeout) {
    return {
      scope: {
        ngModel: '='
      },
      link: function($scope, el) {
        function getFile(file) {
          fileReader.readAsDataUrl(file, $scope)
            .then(function(result) {
              localStorage.setItem('myImage', result); //---> added this code to set key value and save image on localStorage//
              $timeout(function() {
                $scope.ngModel = result;
              });
            });
        }

        el.bind("change", function(e) {
          var file = (e.srcElement || e.target).files[0];
          getFile(file);
        });
      }
    };
  });

app.factory("fileReader", function($q, $log) {
  var onLoad = function(reader, deferred, scope) {
    return function() {
      scope.$apply(function() {
        deferred.resolve(reader.result);
      });
    };
  };

  var onError = function(reader, deferred, scope) {
    return function() {
      scope.$apply(function() {
        deferred.reject(reader.result);
      });
    };
  };

  var onProgress = function(reader, scope) {
    return function(event) {
      scope.$broadcast("fileProgress", {
        total: event.total,
        loaded: event.loaded
      });
    };
  };

  var getReader = function(deferred, scope) {
    var reader = new FileReader();
    reader.onload = onLoad(reader, deferred, scope);
    reader.onerror = onError(reader, deferred, scope);
    reader.onprogress = onProgress(reader, scope);
    return reader;
  };

  var readAsDataURL = function(file, scope) {
    var deferred = $q.defer();

    var reader = getReader(deferred, scope);
    reader.readAsDataURL(file);

    return deferred.promise;
  };

  return {
    readAsDataUrl: readAsDataURL
  };
});