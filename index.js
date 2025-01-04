var $B = __BRYTHON__,
    _b_ = $B.builtins,
    locals___main__ = $B.imported["__main__"],
    locals = locals___main__,
    frame = ["__main__", locals, "__main__", locals]
var __file__ = '<string>'
locals.__name__ = '__main__'
locals.__doc__ = _b_.None
locals.__annotations__ = locals.__annotations__ || $B.empty_dict()
$B.enter_frame(frame, __file__, 1)

var _frame_obj = $B.frame_obj
var stack_length = $B.count_frames()
try{
  $B.set_lineno(frame, 1)
  $B.$import("random", [], {}, locals, true)
  $B.set_lineno(frame, 3)
  locals___main__.rock = '\n\
    _______\n\
---\'   ____)\n\
      (_____)\n\
      (_____)\n\
      (____)\n\
---.__(___)\n\
'
  $B.set_lineno(frame, 12)
  locals___main__.paper = '\n\
    _______\n\
---\'   ____)____\n\
          ______)\n\
          _______)\n\
         _______)\n\
---.__________)\n\
'
  $B.set_lineno(frame, 21)
  locals___main__.scissors = '\n\
    _______\n\
---\'   ____)____\n\
          ______)\n\
       __________)\n\
      (____)\n\
---.__(___)\n\
'
  $B.set_lineno(frame, 30)
  locals___main__.game_images = $B.$list([locals___main__.rock, locals___main__.paper, locals___main__.scissors])
  $B.set_lineno(frame, 31)
  locals___main__.user_choice = $B.$call(_b_.int, [14,14,97])($B.$call(_b_.input, [18,18,96])('What do you choose? Type 0 for Rock, 1 for paper or 2 for Scissors.\n'))
  if($B.set_lineno(frame, 33) && ($B.$bool($B.rich_comp('__ge__', locals___main__.user_choice, 0)) && $B.$bool($B.rich_comp('__le__', locals___main__.user_choice, 2)))){
    $B.set_lineno(frame, 34);
    $B.$call(_b_.print, [4,4,35])($B.$getitem(locals___main__.game_images, locals___main__.user_choice,[10,22,33]))
  }
  $B.set_lineno(frame, 35)
  locals___main__.computer_choice = $B.$call($B.$getattr_pep657(locals___main__.random, 'randint', [18,18,32]), [18,18,38])(0, 2)
  $B.set_lineno(frame, 36);
  $B.$call(_b_.print, [0,0,24])('Computer chose:')
  $B.set_lineno(frame, 37);
  $B.$call(_b_.print, [0,0,35])($B.$getitem(locals___main__.game_images, locals___main__.computer_choice,[6,18,33]))
  if($B.set_lineno(frame, 39) && ($B.$bool($B.rich_comp('__ge__', locals___main__.user_choice, 3)) || $B.$bool($B.rich_comp('__lt__', locals___main__.user_choice, 0)))){
    $B.set_lineno(frame, 40);
    $B.$call(_b_.print, [4,4,54])('You\'ve typed an invalid number. You Lose!')
  }else if($B.set_lineno(frame, 41) && $B.$bool($B.rich_comp('__eq__', locals___main__.user_choice, locals___main__.computer_choice))){
    $B.set_lineno(frame, 42);
    $B.$call(_b_.print, [4,4,25])('It\'s a Draw!')
  }else if($B.set_lineno(frame, 43) && ($B.$bool($B.rich_comp('__eq__', locals___main__.user_choice, 0)) && $B.$bool($B.rich_comp('__eq__', locals___main__.computer_choice, 1)))){
    $B.set_lineno(frame, 44);
    $B.$call(_b_.print, [4,4,22])('You Lose!')
  }else if($B.set_lineno(frame, 45) && ($B.$bool($B.rich_comp('__eq__', locals___main__.user_choice, 0)) && $B.$bool($B.rich_comp('__eq__', locals___main__.computer_choice, 2)))){
    $B.set_lineno(frame, 46);
    $B.$call(_b_.print, [4,4,21])('You Win!')
  }else if($B.set_lineno(frame, 47) && ($B.$bool($B.rich_comp('__eq__', locals___main__.user_choice, 1)) && $B.$bool($B.rich_comp('__eq__', locals___main__.computer_choice, 0)))){
    $B.set_lineno(frame, 48);
    $B.$call(_b_.print, [4,4,21])('You Win!')
  }else if($B.set_lineno(frame, 49) && ($B.$bool($B.rich_comp('__eq__', locals___main__.user_choice, 1)) && $B.$bool($B.rich_comp('__eq__', locals___main__.computer_choice, 2)))){
    $B.set_lineno(frame, 50);
    $B.$call(_b_.print, [4,4,22])('You lose!')
  }else if($B.set_lineno(frame, 51) && ($B.$bool($B.rich_comp('__eq__', locals___main__.user_choice, 2)) && $B.$bool($B.rich_comp('__eq__', locals___main__.computer_choice, 0)))){
    $B.set_lineno(frame, 52);
    $B.$call(_b_.print, [4,4,22])('You lose!')
  }else if($B.set_lineno(frame, 53) && ($B.$bool($B.rich_comp('__eq__', locals___main__.user_choice, 2)) && $B.$bool($B.rich_comp('__eq__', locals___main__.computer_choice, 1)))){
    $B.set_lineno(frame, 54);
    $B.$call(_b_.print, [4,4,21])('You Win!')
  }
  $B.leave_frame({locals, value: _b_.None})
}catch(err){
  $B.set_exc_and_trace(frame, err)
  $B.leave_frame({locals, value: _b_.None})
  throw err
}
